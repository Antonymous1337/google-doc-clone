"use client";

import { BoldIcon, ItalicIcon, ListTodoIcon, LucideIcon, MessageSquarePlusIcon, PrinterIcon, Redo2Icon, RemoveFormattingIcon, SpellCheckIcon, UnderlineIcon, Undo2Icon } from "lucide-react";

import { FontFamilyButton } from './font-family-button';
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";

interface ToolbarButtonProps {
    onClick?: () => void;
    isActive?: boolean;
    icon: LucideIcon
}

const ToolbarButton = ({
    onClick,
    isActive,
    icon: Icon
}: ToolbarButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
                isActive && "bg-neutral-200/80"
            )}
        >
            <Icon className="size-4"/>
        </button>
    )
}

export const Toolbar = () => {
    const { editor } = useEditorStore()

    const sections: (ToolbarButtonProps & { label: string })[][] = [
        [
            {
                label: "Undo",
                icon: Undo2Icon,
                onClick: () => editor?.chain().focus().undo().run()
            },
            {
                label: "Redo",
                icon: Redo2Icon,
                onClick: () => editor?.chain().focus().redo().run()
            },
            {
                label: "Print",
                icon: PrinterIcon,
                onClick: () => window.print()
            },
            {
                label: "Spell Check",
                icon: SpellCheckIcon,
                onClick: () => {
                    console.log("Doesn't work")
                }
            }
        ],
        [
            {
                label: "Bold",
                icon: BoldIcon,
                isActive: editor?.isActive("bold"),
                onClick: () => editor?.chain().focus().setBold().run()
            },
            {
                label: "Italic",
                icon: ItalicIcon,
                isActive: editor?.isActive("italic"),
                onClick: () => editor?.chain().focus().setItalic().run()
            },
            {
                label: "Underline",
                icon: UnderlineIcon,
                isActive: editor?.isActive("underline"),
                onClick: () => editor?.chain().focus().toggleUnderline().run()
            }
        ],
        [
            {
                label: "Comment",
                icon: MessageSquarePlusIcon,
                onClick: () => console.log("TODO: Comment"),
                isActive: false
            },
            {
                label: "List Todo",
                icon: ListTodoIcon,
                onClick: () => editor?.chain().focus().toggleTaskList().run(),
                isActive: editor?.isActive("taskList")
            },
            {
                label: "Remove Formatting",
                icon: RemoveFormattingIcon,
                onClick: () => editor?.chain().focus().unsetAllMarks().run()
            },
        ]
    ]

    return (
        <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
            {
                sections[0].map((item) => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { label: _, ...itemWithoutLabels } = item
                    
                    return (
                        <ToolbarButton key={item.label} {...itemWithoutLabels} />
                    )
                })
            }
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            <FontFamilyButton />
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {
                sections[1].map((item) => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { label: _, ...itemWithoutLabels } = item
                    
                    return (
                        <ToolbarButton key={item.label} {...itemWithoutLabels} />
                    )
                })
            }
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {
                sections[2].map((item) => {
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                    const { label: _, ...itemWithoutLabels } = item
                    
                    return (
                        <ToolbarButton key={item.label} {...itemWithoutLabels} />
                    )
                })
            }
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {
            
            }
            <Separator orientation="vertical" className="h-6 bg-neutral-300" />
            {
            
            }
        </div>
    )
};