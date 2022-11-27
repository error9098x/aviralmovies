import { IMovieCard } from "@types";
import { CustomLink } from "components/CustomLink";
import { Image } from "components/Image";
import { IMAGE_SIZE, resizeImageLoklok } from "constants/global";
import { PATH } from "constants/path";
import { MovieTitle } from "modules/MovieTitle";
import styles from "./movieCard.module.scss";

const MovieCard = ({
  id,
  domainType,
  title,
  poster,
  href = `${PATH.watch}/${domainType}/${id}`,
}: IMovieCard) => {
  return (
    <div className={styles.movieCard}>
      <CustomLink href={href} className={styles.movieCardMedia}>
        <Image
          alt={title}
          className={styles.movieCardPoster}
          src={resizeImageLoklok(poster, IMAGE_SIZE.movieCard.width, IMAGE_SIZE.movieCard.height)}
        />
        <picture>
          <img src="/icon-play.png" alt="play" className={styles.movieCardPlay} />
        </picture>
      </CustomLink>
      <MovieTitle href={href} className={styles.movieCardTitle}>
        {title}
      </MovieTitle>
    </div>
  );
};

export default MovieCard;
