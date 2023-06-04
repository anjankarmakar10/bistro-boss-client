import { DollarSign, ShoppingBag, Truck, Users } from "react-feather";
import { useAuth } from "../../../contexts/AuthProvider";
import useAdminStats from "../../../hooks/useAdminStats";
import HomeCard from "./HomeCard";

const AdminHome = () => {
  const { user } = useAuth();
  const [stats] = useAdminStats();

  return (
    <div className="max-w-5xl py-8 px-4 mx-auto">
      <h2 className="w-fit mx-auto font-bold text-xl md:text-3xl">
        Hello {user?.displayName}, Welcome back!
      </h2>
      <div>
        <section className="flex gap-4 flex-wrap py-8 justify-center">
          <HomeCard
            title={"Users"}
            icon={<Users size={36} />}
            info={stats?.users}
          />
          <HomeCard
            title={"Products"}
            icon={<ShoppingBag size={36} />}
            info={stats?.products}
          />
          <HomeCard
            title={"Orders"}
            icon={<Truck size={36} />}
            info={stats?.orders}
          />
          <HomeCard title={"Revenue"} icon={""} info={`$${stats?.revenue}`} />
        </section>
      </div>
    </div>
  );
};

export default AdminHome;
