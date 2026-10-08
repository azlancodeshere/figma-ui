const StatCard = ({
  icon: Icon,
  title,
  value,
  change,
  negative = false,
}) => {
  return (
    <div className="w-full h-[120px] rounded-[20px] bg-white p-4 shadow-[0_4px_10px_rgba(0,0,0,0.12)]">
      <div className="flex items-center gap-4">
        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#F5F7F8]">
          <Icon
            size={26}
            strokeWidth={2.5}
            className="text-[#D9AD28]"
          />
        </div>

        <h3 className="text-[20px] font-medium text-[#292929]">
          {title}
        </h3>
      </div>

      <div className="mt-2 flex items-center gap-4">
        <span className="text-[29px] font-semibold text-[#292929]">
          {value}
        </span>

        <span
          className={`rounded-full px-3 py-1 text-[13px] font-medium ${
            negative
              ? "bg-[#FFE9ED] text-[#E64C68]"
              : "bg-[#D8FAF3] text-[#31BDA6]"
          }`}
        >
          {change} ↗
        </span>
      </div>
    </div>
  );
};

export default StatCard;