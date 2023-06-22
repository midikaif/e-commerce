import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";

export default function Star({ stars, reviews }) {

    const starRating = Array.from({ length: 5 }, (e, i) => {
        let num = i + 0.5;

        return (
            <span>
                {stars >= i + 1 ? <FaStar className="icon" /> : stars >= num ? <FaStarHalfAlt className="icon" /> : <AiOutlineStar className="icon" />}
            </span>
        )
    })

    const Wrapper = styled.section`
    .icon-style {
        display: flex;
        gap: 0.2rem;
        align-items: center;
        justify-content: flex-start;
    
        .icon {
          font-size: 2rem;
          color: orange;
        }
    
        .empty-icon {
          font-size: 2.6rem;
        }
        p {
          margin: 0;
          padding-left: 1.2rem;
        }
      }`

    return (
        <Wrapper>
            <div className="icon-style">
                {ratingStar}
                <p>({reviews} customer reviews)</p>
            </div>
        </Wrapper>
    )
}
