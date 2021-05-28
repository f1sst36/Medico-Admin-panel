import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

export const StatisticsSkeleton = () => {
    return (
        <>
            <Grid xs={12} md={3} item>
                <Skeleton
                    className="statistics-skeleton-card"
                    variant="rect"
                    animation="wave"
                    width={'100%'}
                    height={138}
                />
            </Grid>
            <Grid xs={12} md={3} item>
                <Skeleton
                    className="statistics-skeleton-card"
                    variant="rect"
                    animation="wave"
                    width={'100%'}
                    height={138}
                />
            </Grid>
            <Grid xs={12} md={3} item>
                <Skeleton
                    className="statistics-skeleton-card"
                    variant="rect"
                    animation="wave"
                    width={'100%'}
                    height={138}
                />
            </Grid>
            <Grid xs={12} md={3} item>
                <Skeleton
                    className="statistics-skeleton-card"
                    variant="rect"
                    animation="wave"
                    width={'100%'}
                    height={138}
                />
            </Grid>
        </>
    );
};
