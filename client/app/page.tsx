import FileUploadComponent from "@/components/global/fileUpload";

export default function Home() {
  return (
    <div>
      <div className="flex min-h-screen w-screen">
        <div className="w-[40%] flex items-center justify-center">
          <FileUploadComponent />
        </div>
        <div className="w-[60%] border-l px-4">2</div>
      </div>
    </div>
  )
}
