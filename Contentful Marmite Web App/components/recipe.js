import Image from 'next/image'
import Link from 'next/link'

export default function Card({ data }) {
    const { title, slug, cookingTime, thumbnail } = data.fields
    
    return(
        <div className = "card">
            <div className = "thumbnail">
                <Image src = { 'https:' + thumbnail.fields.file.url } 
                       width = "500"
                       height = "300"
                />
            </div>
            <div className = "content">
                <div className = "info">
                    <h4>{ title }</h4>
                    <p>Takes approximately { cookingTime } minutes to serve!</p>
                </div>
                <div className = "action">
                    <Link href = { '/recipes/' + slug }>
                        <a>Have a serve!</a>
                    </Link>
                </div>
            </div>

            <style jsx>{`
               .card {
                   transform: rotateZ(-1deg);
               }
               
               .content {
                   background: #fff;
                   box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
                   margin: 0;
                   position: relative;
                   top: -40px;
                   left: -10px;
               }

               .info {
                   padding: 16px;
               }

               .info h4 {
                   margin: 4px 0;
                   text-transform: uppercase;
               }

               .info p {
                   margin: 0;
                   color: #777;
               }

               .action {
                   margin-top: 20px;
                   display: flex;
                   justify-content: flex-end;
               }

               .action a {
                   color: #fff;
                   background: #f01b29;
                   padding: 16px 24px;
                   border-radius: 40px;
                   position: relative;
                   right: -20px;
                   bottom: -20px;
                   text-decoration: none;
               }
            `}</style> 
        </div>
    )
}