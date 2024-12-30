type ErrorProps = {
  children?: React.ReactNode
}
export default function Error({ children }: ErrorProps) {
  return <div>Error{children}</div>
}
