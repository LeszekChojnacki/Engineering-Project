import provinceContour from '../../../../data/contours/provinces'
import countieContour from '../../../../data/contours/counties'
import communeContour from '../../../../data/contours/communes'

export function importContours(option) {

  switch(option) {
    case 1:
      return countieContour
    case 2:
      return communeContour
    default:
      return provinceContour
  }

}