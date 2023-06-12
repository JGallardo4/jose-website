export interface Link {
    URL: string
    Display_Text: string
}

export interface PortfolioItem {
    Title: string
    Link: Array<Link>
    Display_Text: string
    Start_Date: string
    End_Date: string
}

export interface SocialMediaLink {
    Username: string
    Platform: string
    Link: Link
}