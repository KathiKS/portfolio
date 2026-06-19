type Props = {
  title: string;
  description: string;
  stack: string[];
};

export default function ProjectCard({
  title,
  description,
  stack,
}: Props) {
  return (
    <div className="border rounded-3xl p-8 hover:shadow-xl transition">

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <p className="text-gray-600 mt-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {stack.map((item) => (
          <span
            key={item}
            className="
            px-3 py-1
            bg-gray-100
            rounded-full
            text-sm
            "
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}