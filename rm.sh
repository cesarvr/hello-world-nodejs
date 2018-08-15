function rmx {
  oc delete bc $1
  oc delete is $1
}
