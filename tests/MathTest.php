<?php

it('multiplies', fn () => expect(App\Math::mul(2, 3))->toBe(6));
it('fails on purpose', fn () => expect(App\Math::mul(2, 3))->toBe(7));
