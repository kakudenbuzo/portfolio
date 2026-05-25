export function CvSectionTitle({ title }: { title: string }) {
  return (
    <div className="mt-10 mb-5 flex items-center gap-3">
      <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 border-t border-gray-200" />
    </div>
  );
}
