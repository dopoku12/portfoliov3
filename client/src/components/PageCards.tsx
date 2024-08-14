import { Box, Divider, Typography } from '@mui/material'


type PageCardProps = {

    [key:string]: JSX.Element | string

}

export default function PageCards({ title, content }: PageCardProps) {
    return (
<Box component='article'>
        <Typography component='h1'>
            {title}
        </Typography>

{content}

</Box>
    )
}