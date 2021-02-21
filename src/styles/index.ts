import { Typography, Colors, Spacings } from "react-native-ui-lib";

Colors.loadColors({
  pink: "#FF69B4",
  gold: "#FFD700",
});

Typography.loadTypographies({
  h1: { fontSize: 58, fontWeight: "300", lineHeight: 80 },
  h2: { fontSize: 46, fontWeight: "300", lineHeight: 64 },
  title: {
    fontSize: 58,
    fontWeight: "bold",
    lineHeight: 80,
    alignSelf: "center",
  },
});

Spacings.loadSpacings({
  page: 20,
});
