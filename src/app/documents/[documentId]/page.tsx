import { Editor } from "./editor"

interface DocumentPageIdProps {
    params: Promise<{ documentId: string }>
}

const DocumentPageId = async ({ params }: DocumentPageIdProps) => {
    const { documentId } = await params
    
    return (
        <div className="min-h-screen bh-[#FAFBFD]">
            <Editor />
        </div>
    );
}
 
export default DocumentPageId;