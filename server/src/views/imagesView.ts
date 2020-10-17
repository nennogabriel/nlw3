import Image from '../models/Image';

export default {
  render(image: Image) {
    const { id } = image;

    return {
      id,
      url: `http://192.168.15.161:3333/uploads/${image.path}`,
    };
  },
  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};
