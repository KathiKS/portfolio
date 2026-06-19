type Props = {
  title: string;
  description: string;
};

export default function SkillCard({
  title,
  description,
}: Props) {
  return (
    <div
      className="
      p-6
      rounded-2xl
      border
      bg-white
      shadow-sm
      hover:shadow-lg
      hover:-translate-y-2
      transition
      "
    >
      <h3 className="font-semibold text-xl">
        {title}
      </h3>

      <p className="text-gray-600 mt-4">
        {description}
      </p>
    </div>
  );
}