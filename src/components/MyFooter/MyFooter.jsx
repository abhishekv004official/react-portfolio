import './footer.css'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="site-footer ">
            <p>
                &copy;{year} Abhishek V. Built with react
            </p>
            </footer>
    )
}

export default Footer; //we must export