import ConditionalRender from '@/components/conditional-render'
import { getAllsocialMediaLinks } from '@/lib/cms'

export default async function SocialMediaList() {
    const socialMediaLinks = await getAllsocialMediaLinks()

    if (!socialMediaLinks) {
        return <p>No items found</p>
    }

    return (
        <section>
            <header>
                <h2>Social Media</h2>
            </header>
            <main>
                {!socialMediaLinks ?
                    <p>No items found</p> :
                    socialMediaLinks.map((link, i) => (
                        <article key={i}>
                            <p>Username: {link.Username}</p>
                            <p>Platform: {link.Platform}</p>
                            <p>
                                <a href={link.Link.URL}>{link.Link.Display_Text}</a>
                            </p>
                        </article>
                    ))}
            </main>
        </section>
    )
}
