import { ScaleLoader } from "react-spinners";

function MyLoader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ScaleLoader
        height={150}
        margin={10}
        radius={20}
        width={10}
        color="var(--color-word)"
      />
    </div>
  );
}

export default MyLoader;
