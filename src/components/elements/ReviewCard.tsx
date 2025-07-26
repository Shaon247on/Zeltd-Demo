interface ReviewCardProps {
  icon: React.ReactNode;
  secondaryIcon: React.ReactNode;
  title: string;
  description: string;
}

const ReviewCard = ({ icon, secondaryIcon, title, description }: ReviewCardProps) => {
  return (
    <div className="max-w-sm mx-auto bg-[#f8f8ff] p-6 rounded-lg w-[325px] h-[192px] border-2 border-[#E4E4E4]">
      <div className="flex justify-center mb-4">
        <div className="w-14 h-14 rounded-full border-2 border-white bg-[#E0DEF7] flex items-center justify-center relative">
          {icon}
          <div className="size-6 bg-[#7065F0] rounded-[8px] absolute flex items-center justify-center -bottom-1 -right-1">
            {secondaryIcon}
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="text-[#7065F0] text-xl font-semibold">{title}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
