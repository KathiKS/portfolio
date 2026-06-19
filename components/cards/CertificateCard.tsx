type Props = {
  title: string;
  issuer: string;
  year: string;
};

export default function CertificateCard({
  title,
  issuer,
  year,
}: Props) {
  return (
    <div className="border rounded-3xl p-8 hover:shadow-xl transition">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{issuer}</p>
      <p className="text-sm text-gray-500 mt-1">{year}</p>
    </div>
  );
}
