import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Link from '@mui/material/Link';

export default function BasicList(props) {
    const {data} = props
    return (
        <Box sx={{ width: '100%', maxWidth: 390}}>
            {
                data.map(data => (
                    <List>
                        <ListItem>
                            <ListItemButton>
                                <Link target="_blank" href={data.link} underline="hover">
                                    {data.title}
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    </List>
                ))
            }
        </Box>
    );
}