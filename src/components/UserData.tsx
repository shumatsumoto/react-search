import { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
  },
});

type Props = {
  user: {
    html_url: string;
    avatar_url: string;
    login: string;
    name: string;
    created_at: string;
    updated_at: string;
  };
};

const UserData: FC<Props> = ({ user }) => {
  const classes = useStyles();

  return (
    <Card id="card" className={classes.root}>
      <CardActionArea>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          <CardMedia
            className={classes.media}
            image={user.avatar_url}
            title={user.login}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {user.created_at}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {user.updated_at}
            </Typography>
          </CardContent>
        </a>
      </CardActionArea>
    </Card>
  );
};

export default UserData;
