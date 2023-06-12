export interface PortfolioItem {
    Title: string
    Link: Array<{
        URL: string
        Display_Text: string
    }>
    Full_Text: string
    Start_Date: string
    End_Date: string
}