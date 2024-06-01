import { Chip } from '@nextui-org/chip';
import { CheckIcon } from './icons/CheckIcon';
import { CloseFilledIcon } from '@nextui-org/shared-icons';

export default function Features() {
  return (
    <div className='flex flex-col md:grid md:grid-cols-2 md:gap-10'>
      <dl>
        <dd>Anonymus</dd>
        <dd>
          <Chip
            size='lg'
            startContent={<CheckIcon size={15} />}
            color='success'
          >
            Free
          </Chip>
        </dd>
        <dd>
          <Chip
            size='lg'
            startContent={<CheckIcon size={15} />}
            color='success'
          >
            Ad-Free
          </Chip>
        </dd>
        <dd>
          <Chip
            size='lg'
            startContent={<CheckIcon size={15} />}
            color='success'
          >
            Offline
          </Chip>
        </dd>
        <dd>
          <Chip
            size='lg'
            startContent={<CheckIcon size={15} />}
            color='success'
          >
            Unlimited Songs
          </Chip>
        </dd>
        <dd>
          <Chip
            size='lg'
            startContent={<CheckIcon size={15} />}
            color='success'
          >
            Single Set List
          </Chip>
        </dd>
        <dd>
          <Chip size='lg' color='danger' startContent={<CloseFilledIcon />}>
            Backups
          </Chip>
        </dd>
      </dl>
      <dl>
        <dd>Authenticated</dd>
        <dd>
          <Chip
            size='lg'
            startContent={<CheckIcon size={15} />}
            color='success'
          >
            Free
          </Chip>
        </dd>
        <dd>
          <Chip
            size='lg'
            startContent={<CheckIcon size={15} />}
            color='success'
          >
            Ad-Free
          </Chip>
        </dd>
        <dd>
          <Chip
            size='lg'
            startContent={<CheckIcon size={15} />}
            color='success'
          >
            Offline Support
          </Chip>
        </dd>
        <dd>
          <Chip
            size='lg'
            startContent={<CheckIcon size={15} />}
            color='success'
          >
            Unlimted Songs
          </Chip>
        </dd>
        <dd>
          <Chip
            size='lg'
            startContent={<CheckIcon size={15} />}
            color='success'
          >
            Multiple Set Lists
          </Chip>
        </dd>
        <dd>
          <Chip
            size='lg'
            startContent={<CheckIcon size={15} />}
            color='success'
          >
            Shareable Set Lists
          </Chip>
        </dd>
        <dd>
          <Chip
            size='lg'
            startContent={<CheckIcon size={15} />}
            color='success'
          >
            Backups
          </Chip>
        </dd>
      </dl>
    </div>
  );
}
