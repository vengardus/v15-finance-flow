import { FC } from "react";
import QRCode from "react-qr-code";

interface ShowQRProps {
  value: string;
}
export const ShowQR: FC<ShowQRProps> = ({ value }) => {
  return (
    <div style={{ background: "white", padding: "16px" }}>
      <QRCode value={value} />
    </div>
  );
};
