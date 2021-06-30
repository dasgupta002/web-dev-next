export default function Skeleton() {
    return(
        <div className = "skeleton">
            <div className = "head"></div>
            <div className = "label"></div>
            <div className = "content"></div>
            <div className = "content"></div>
            <div className = "content"></div>
            <style jsx>{`
               .skeleton {
                   max-width: 1200px;
                   margin: 20px auto;
               }
               .skeleton > div {
                   background: #dbcc1a;
                   border-radius: 4px;
                   margin: 20px 0;
               }
               .head {
                   padding: 12% 0;
               }
               .label {
                   padding: 15px 0;
                   max-width: 500px;
               }
               .content {
                   padding: 8px 0;
                   max-width: 1000px;
               }
            `}</style>
        </div>
    )
}