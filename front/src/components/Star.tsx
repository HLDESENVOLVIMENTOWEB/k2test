interface ReviewDTO {
    review: number;
}

export const Review = ({review}: ReviewDTO) => {
   return(
    <p className="font-normal	text-[15x]  my-4"><strong>Review:</strong> {review}</p>
   )
}