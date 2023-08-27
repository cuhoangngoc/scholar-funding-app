type CountBoxProps = {
  title: string;
  value: string;
};

const CountBox = ({ title, value }: CountBoxProps) => {
  return (
    <div className="flex flex-col items-center w-[150px]">
      <h4 className="font-epilogue font-bold text-[30px] text-white p-3 bg-primary rounded-t-[10px] w-full text-center truncate">
        {value}
      </h4>
      <p className="font-epilogue font-normal text-[16px] bg-secondary px-3 py-2 w-full round-b-[10px] text-center border-gray-700 border-t-2">
        {title}
      </p>
    </div>
  );
};

export default CountBox;
