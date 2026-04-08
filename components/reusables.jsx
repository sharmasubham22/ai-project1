export const GrayTitle = ({children}) => (
    <span className="bg-linear-to-br from-stone-100 via-stone-300 to-stone-500 bg-clip-text text-transparent">{children}</span>
)

export const AquaTitle = ({children}) => (
    <span className="bg-linear-to-br from-[#8bd3ca] via-[#5da49c] to-[#2c766e] bg-clip-text text-transparent">{children}</span>
)

export const SectionLabel = ({children}) => (
    <p className="inline-flex items-center gap-2 text-xs font-semibold text-[#8bd3ca] tracking-[0.14em] uppercase">
        <span className="w-4 h-px bg-[#8bd3ca]">
        {children}
        </span>
    </p>
)