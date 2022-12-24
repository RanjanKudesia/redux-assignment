import Box from '@material-ui/core/Box';

import { Container } from '@material-ui/core';

function Footer() {
    return (
        <>
        <Container>
            <Box component={'div'} sx={{
                width: 300,
                height: 300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                }
            }}
            alignItems='center'
            >
                @copyright FakeShop
            </Box>
        </Container>
        </>
    )
}

export default Footer