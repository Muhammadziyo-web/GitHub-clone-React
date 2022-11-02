function Footer() {
    return ( 
        <footer>
            <div className="right-footer">
            <i class="fa-brands fa-github"></i>
            © {new Date().getFullYear()} GitHub, Inc.
            </div>
            <ul>

                <li><a target={"_blank"} href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service">Terms</a></li>
                <li><a target={"_blank"} href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement">Privacy</a></li>
                <li><a target={"_blank"} href="https://github.com/security">Security</a></li>
                <li><a target={"_blank"} href="https://www.githubstatus.com/">Status</a></li>
                <li><a target={"_blank"} href="https://docs.github.com/">Docs</a></li>
                <li><a target={"_blank"} href="https://support.github.com/?tags=dotcom-footer">Contact GitHub</a></li>
                <li><a target={"_blank"} href="https://github.com/pricing">Pricing</a></li>
                <li><a target={"_blank"} href="https://docs.github.com/">API</a></li>
                <li><a target={"_blank"} href="https://services.github.com/">Training</a></li>
                <li><a target={"_blank"} href="https://github.blog/">Blog</a></li>
                <li><a target={"_blank"} href="https://github.com/about">About</a></li>
    
            </ul>
    
           
    </footer>
     );
}

export default Footer;