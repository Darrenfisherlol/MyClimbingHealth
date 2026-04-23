import styles from "./footer.module.css"

export default function GeneralFooter(){

    return(
        <footer className={`flex flex-col items-center justify-center mt-4 p-4 space-y-2 ${styles.footer}>}`}>
            <p className="text-sm">
                2026 Ascent Climbing
            </p>

            <div className="flex gap-4">
                <a href="#" className="text-sm">
                    Why ascent?
                </a>
                <a href="#" className="text-sm">
                    About us
                </a>
            </div>


            <div className="flex gap-4">
                <a href="#" className="text-sm">
                    Privacy
                </a>
                <a href="#" className="text-sm">
                    Terms
                </a>
                <a href="#" className="text-sm">
                    Contact
                </a>
            </div>
        </footer>
    );
}