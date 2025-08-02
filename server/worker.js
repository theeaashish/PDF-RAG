import { Worker } from "bullmq";
import { OpenAIEmbeddings } from "@langchain/openai";
import { QdrantVectorStore } from "@langchain/qdrant";
import { Document } from "@langchain/core/documents";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { CharacterTextSplitter } from "@langchain/textsplitters";

const worker = new Worker(
  "file-upload-queue",
  async (job) => {
    console.log(`Job: `, job.data);
    const data = JSON.parse(job.data);
    /* 
    path: data.path,
    read the pdf from path
    chunk the pdf
    call the openai embedding model for every chunk\
    store the chunk in qdrant db
    */

    //load the pdf
    const loader = new PDFLoader(data.path);
    const docs = await loader.load();
    const textSplitter = new CharacterTextSplitter({
      chunkSize: 100,
      chunkOverlap: 0,
    });
    const texts = await textSplitter.splitText(docs[0]);
    console.log(`\n\nAfter split`, texts);
  },
  {
    concurrency: 100,
    connection: {
      host: "localhost",
      port: 6379,
    },
  }
);
