import { Editor } from "./editor"
import { Toolbar } from "./toolbar"

interface DocumentPageIdProps {
    params: Promise<{ documentId: string }>
}

const DocumentPageId = async ({ params }: DocumentPageIdProps) => {
    const { documentId } = await params
    
    return (
        <div className="min-h-screen bh-[#FAFBFD]">
            <Toolbar />
            <Editor />
        </div>
    );
}
 
export default DocumentPageId;