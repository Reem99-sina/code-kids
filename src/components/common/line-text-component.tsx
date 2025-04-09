export default function DividerWithText({ text }: { text: string }) {
  return (
    <div className="relative flex items-center  w-full max-w-md mx-auto text-xs">
      <div className="flex-grow border-t border-pinkOneTransparent"></div>
      <span className="flex-shrink mx-4 text-textSecondary">{text}</span>
      <div className="flex-grow border-t border-pinkOneTransparent"></div>
    </div>
  );
}
