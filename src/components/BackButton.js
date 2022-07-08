import ArrowIcon from "../components/icons/ArrowIcon";

export default function BackButton({ onClick }) {
  return (
    <div
      className="float-left absolute rounded-full hover:bg-coolGray-100 py-2 px-2 "
      onClick={onClick}
    >
      <ArrowIcon className="w-4 h-4 transform transition rotate-180" />
    </div>
  );
}
