import Card from "./Card";
import { championRankingList } from "./opgg";

const ChampionLayout = () => {
  return (
    <main style={{ width: "100vw" }}>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "760px",
          margin: "0 auto",
        }}
      >
        {championRankingList.map((v) => (
          <Card
            rankLabel={v.positionTierData.rank}
            rankUp={v.positionTierData.rank_prev}
            championImg={v.image_url}
            TierLabelImg={`${v.positionTierData.tier}`}
            positionImg={v.positionName}
            winRate={v.positionWinRate * 100}
            pickRate={v.positionPickRate * 100}
            banRate={v.positionBanRate * 100}
            hardChamImg={
              "https://opgg-static.akamaized.net/meta/images/lol/14.19.1/champion/Poppy.png"
            }
          />
        ))}
      </section>
    </main>
  );
};

export default ChampionLayout;
