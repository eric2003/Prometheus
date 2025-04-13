# Rusanov Flux

## Rusanov Link

- [Rusanov flux computation](https://www.cfd-online.com/Forums/main/78253-rusanov-flux-computation.html).


```python
   1/2       3/2               i-1/2       i+1/2
0   *    1    *    2  ...  i-1   *     i    *       i+1
  u1/2L,R  u3/2L,R            ui-1/2L,R    ui+1/2L,R
   
uR[0] = u[1]
uR[1] = u[2]
uR[i-1] = u[i]
uR[i] = u[i+1]

uL[0] = u[0]
uL[1] = u[1]
uL[i-1] =u[i-1]
uL[i] =u[i]



```