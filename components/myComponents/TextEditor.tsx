"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function RichEditor() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World 🌍</p>",
  });

  return (
    <Card className="max-w-2xl w-full space-y-4 p-4">
      <CardContent>
        <div className="flex gap-2 mb-2">
          <Button
            variant="outline"
            onClick={() => editor?.chain().focus().toggleBold().run()}
            className={editor?.isActive("bold") ? "bg-muted" : ""}
          >
            Bold
          </Button>
          <Button
            variant="outline"
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            className={editor?.isActive("italic") ? "bg-muted" : ""}
          >
            Italic
          </Button>
        </div>
        <div className="border rounded-md p-4 min-h-[200px]">
          <EditorContent editor={editor} />
        </div>
      </CardContent>
    </Card>
  );
}
