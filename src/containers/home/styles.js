const useHomeStyles = () => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBackground: {
    width: '100%',
    height: '276px',
    position: 'absolute',
    zIndex: -1,
    top: 0,
    left: 0,
    objectFit: 'cover',
  },
});

export default useHomeStyles;
