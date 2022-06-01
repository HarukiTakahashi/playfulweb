import Image from "next/image";

export default function Papers(props) {
  return (
    <div className="grid-cols-1">
    {props.papers.map((paper) => (
        <div className="l-wrapper">
        <a href={paper.document}>
        <article className="card border rounded-xl bg-gray-50">
          <header class="card-header">
            <div className="card-image">
                <img
                  src={
                    paper.imageURL
                      ? "/project-images/"+paper.imageURL
                      : "/project-images/noImage.png"
                  }
                  height={100}
                  width={150}
                  objectFit="cover"
                  alt=""
        />
        <div class="flex-1">
              <h4 class="card-title margin-remove">【{paper.form}】</h4>
              <h4 class="card-title ">{paper.title}</h4>
        <ul class="card-meta card-nav">
        <p> {paper.publisher} <br />{paper.conforenceName}</p>
              </ul>
            </div>
            </div>
            
          </header>
        <div class="card-body">
        <p>{paper.abstruct}</p>
        </div>
        </article>
        
        </a>
      </div>
    ))}
    </div>
  );
}