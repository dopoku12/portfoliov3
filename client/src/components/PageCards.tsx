import { Card, Divider, Typography } from '@mui/material'


type PageCardProps = {
    title: string,
    content: JSX.Element | string

}

export default function PageCards({ title, content }: PageCardProps) {
    return (

        <Typography component='h2'>
            {title}
        </Typography>


    )
}