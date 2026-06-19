type Props = {
  title: string;
  company: string;
  duration: string;
  description: string;
};

export default function InternshipCard({
  title,
  company,
  duration,
  description,
}: Props) {
  return (
    <div className="border rounded-3xl p-8 hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{company}</p>
      <p className="text-sm text-gray-500 mt-1">{duration}</p>
      <p className="text-gray-600 mt-4">{description}</p>
    </div>
  );
}
