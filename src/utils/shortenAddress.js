export const shortenAddress = (address, num = 3) => {
  if (!address) return '';
  return !!address && `${address.substring(0, num + 2)}...${address.substring(address.length - num - 1)}`;
};
