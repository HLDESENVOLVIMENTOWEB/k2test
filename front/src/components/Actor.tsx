interface ActorDTO {
    actor: string;
}

export const Actor = ({actor}: ActorDTO) => {
   return(
    <p className="font-normal	text-[15x] my-4"><strong>Actor:</strong> {actor}</p>
   )
}