import { useRouter } from "next/router";
import { Nav } from "../../components/Header";

const PortfolioId = () => {
  const router = useRouter();
  const { portfolioid } = router.query;

  return (
    <div>
      <Nav />
    </div>
  );
};

export default PortfolioId;
