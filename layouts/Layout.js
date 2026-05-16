export default function Layout({ children }) {
    return (
        <>
            {children}
            <footer
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '16px',
                    color: '#ffaa00',
                }}
            >
                <ul>
                    <div>Footer Content</div>
                </ul>
            </footer>
        </>
    )
}
