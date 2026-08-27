import type { Work } from "@/lib/schema";

type ObjectPlateProps = {
  work: Work;
};

export function ObjectPlate({ work }: ObjectPlateProps) {
  const rows = [
    ["Maker", `${work.maker.name} (${work.maker.life})`, work.maker.place],
    ["Dated", work.dateDisplay, work.dateNote],
    ["Medium", work.medium, ""],
    ["Size", work.dimensions, ""],
    ["Location", work.location, work.accession],
    ["Acquired", work.acquisition, ""],
    ["Rights", work.rights, ""],
  ] as const;

  return (
    <section className="plate" id="plate">
      <header className="plate__head">
        <h1 className="plate__title">{work.title}</h1>
        <p className="plate__local">{work.titleLocal}</p>
      </header>
      <p className="plate__maker">{work.maker.note}</p>
      <table className="spec-sheet">
        <tbody>
          {rows.map(([name, value, note]) => (
            <tr key={name}>
              <th scope="row">{name}</th>
              <td>{value}</td>
              <td className="spec-sheet__note">{note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
