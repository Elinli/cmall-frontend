import b1 from '@/assets/images/banner/1.png'
const banners = [
  {
    id: 1,
    title: '华为手机',
    image: b1,
  },
  {
    id: 2,
    title: '华为手机',
    image: b1,
  },
  {
    id: 3,
    title: '华为手机',
    image: b1,
  },
  {
    id: 4,
    title: '华为手机',
    image: b1,
  },
  {
    id: 11,
    title: '华为手机',
    image: b1,
  },
  {
    id: 12,
    title: '华为手机',
    image: b1,
  },
]
export default function Banner() {
  return (
    <div className="banner-box pt-4 pb-4 pl-40 pr-40 flex justify-between mt-4">
      {banners.map((banner) => (
        <div
          className="hover:font-bold text-base w-16 h-16 flex flex-col cursor-pointer items-center"
          key={banner.id}
        >
          <img
            className="hover:scale-110 transition duration-300 origin-center transform-gpu"
            src={banner.image}
            alt={banner.title}
          />
          {banner.title}
        </div>
      ))}
    </div>
  )
}
